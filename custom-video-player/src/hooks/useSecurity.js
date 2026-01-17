import { useState, useEffect } from 'react';

export const useSecurity = () => {
    const [securityAlert, setSecurityAlert] = useState('');

    useEffect(() => {
        // Override console methods to prevent logging
        const originalLog = console.log;
        console.log = () => {};
        const originalWarn = console.warn;
        console.warn = () => {};
        const originalError = console.error;
        console.error = () => {};
        const originalInfo = console.info;
        console.info = () => {};
        const originalDebug = console.debug;
        console.debug = () => {};

        const handleContextMenu = (e) => {
            e.preventDefault();
            setSecurityAlert('Security Alert: Right-click is disabled.');
        };

        const handleKeyDown = (e) => {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (e.ctrlKey && e.key === 'U') || (e.ctrlKey && e.key === 'A')) {
                e.preventDefault();
                setSecurityAlert('Security Alert: Developer tools are restricted.');
            }
        };

        const preventCopyPaste = (e) => {
            e.preventDefault();
            setSecurityAlert('Security Alert: Copy/Paste is restricted.');
        };

        const checkDevTools = () => {
            const threshold = 160;
            if (window.outerHeight - window.innerHeight > threshold || window.outerWidth - window.innerWidth > threshold) {
                setSecurityAlert('Security Alert: Developer tools detected. Access restricted.');
            }
        };

        // Recursive debugger trap
        const debuggerTrap = () => {
            setTimeout(() => {
                debugger;
                debuggerTrap();
            }, 100);
        };
        debuggerTrap();

        document.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('copy', preventCopyPaste);
        window.addEventListener('paste', preventCopyPaste);
        window.addEventListener('cut', preventCopyPaste);
        const interval = setInterval(checkDevTools, 1000);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('copy', preventCopyPaste);
            window.removeEventListener('paste', preventCopyPaste);
            window.removeEventListener('cut', preventCopyPaste);
            console.log = originalLog;
            console.warn = originalWarn;
            console.error = originalError;
            console.info = originalInfo;
            console.debug = originalDebug;
            clearInterval(interval);
        };
    }, []);

    const dismissAlert = () => setSecurityAlert('');

    return { securityAlert, dismissAlert };
};