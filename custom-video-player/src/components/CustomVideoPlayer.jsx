/**
 * CustomVideoPlayer Component
 *
 * A secure, custom YouTube video player component that embeds YouTube videos
 * with custom controls and security restrictions. This component uses the
 * youtube-video-element web component and Media Chrome for video controls.
 *
 * Features:
 * - Embeds YouTube videos securely
 * - Custom media control bar
 * - Responsive design with 16:9 aspect ratio
 * - Click event handling
 * - Dynamic video source loading
 */

import React, { useRef, useEffect } from 'react';
// Import the YouTube video element web component for embedding YouTube videos
import 'youtube-video-element';
// Import Media Chrome components for custom video controls
import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaFullscreenButton,
} from "media-chrome/react";

/**
 * CustomVideoPlayer functional component
 *
 * Renders a YouTube video player with custom controls and event handling.
 * The video source is loaded dynamically to avoid exposing URLs in static HTML.
 *
 * @returns {JSX.Element} The video player component
 */
const CustomVideoPlayer = () => {
    // Ref for the player container div element
    const playerContainerRef = useRef(null);
    // Ref for the youtube-video element to control video playback
    const videoRef = useRef(null);

    // Dynamic video source - in a real app, this would come from props or state
    // Currently set to a placeholder URL that should be replaced with actual video ID
    // The .trim() ensures no extra whitespace
    const videoSource = ("https://www.youtube.com/watch?v=YOUR_VIDEO_ID").trim();

    /**
     * useEffect hook to set the video source dynamically
     *
     * Sets the video source on the youtube-video element when the component mounts
     * or when videoSource changes. Using ref prevents the URL from appearing in
     * static HTML attributes for minor obfuscation.
     */
    useEffect(() => {
        if (videoRef.current && videoSource) {
            videoRef.current.src = videoSource;
        }
    }, [videoSource]);

    /**
     * Handle click events on the video player container
     *
     * Logs click events for debugging purposes. Can be extended to handle
     * custom interactions like toggling controls or tracking user engagement.
     *
     * @param {MouseEvent} event - The click event object
     */
    const handleClick = (event) => {
        console.log('Left click detected!', event.button);
    };

    return (
        // Main container div for the video player
        // Includes Bootstrap classes for styling and positioning
        <div
            id="videoPlayerContainer"
            onClick={handleClick}
            ref={playerContainerRef}
            className="video-player-container position-relative overflow-hidden bg-black rounded-3 shadow-lg"
            style={{
                width: '100%',
                aspectRatio: '16/9', // Maintains 16:9 aspect ratio for video
            }}
        >
            {/* MediaController wraps the video and controls */}
            <MediaController
                style={{
                    width: "100%",
                    height: "100%",
                    "--media-primary-color": "#0d6efd", // Blue theme for controls
                    "--media-range-track-height": "4px", // Thicker progress bar
                }}
            >
                {/* YouTube video element - implements HTMLMediaElement API */}
                <youtube-video
                    id="youtube-video"
                    ref={videoRef}
                    slot="media"
                    // src is set via ref in useEffect to avoid static HTML exposure
                    playsInline // Allows inline playback on mobile devices
                    crossOrigin="anonymous" // Enables CORS for secure loading
                />
                {/* Custom control bar with various media controls */}
                <MediaControlBar>
                    <MediaPlayButton /> {/* Play/pause toggle */}
                    <MediaSeekBackwardButton seekOffset={10} /> {/* Skip backward 10s */}
                    <MediaSeekForwardButton seekOffset={10} /> {/* Skip forward 10s */}
                    <MediaTimeRange /> {/* Progress bar with scrubbing */}
                    <MediaTimeDisplay showDuration /> {/* Current time / total duration */}
                    <MediaMuteButton /> {/* Mute/unmute toggle */}
                    <MediaVolumeRange /> {/* Volume slider */}
                    <MediaPlaybackRateButton /> {/* Speed control (0.5x, 1x, 1.5x, 2x) */}
                    <MediaFullscreenButton /> {/* Fullscreen toggle */}
                </MediaControlBar>
            </MediaController>

            {/* Inline styles for additional customization */}
            <style>{`
                .video-player-container {
                    background-color: #000; /* Black background for video area */
                }
                #youtube-video {
                    pointer-events: none; /* Prevent direct interaction with video element */
                }
                /* Optional: Customize Media Chrome aesthetics */
                media-controller {
                    font-family: inherit; /* Inherit font from parent */
                }
            `}</style>
        </div>
    );
};

// Export the component as default
export default CustomVideoPlayer;
