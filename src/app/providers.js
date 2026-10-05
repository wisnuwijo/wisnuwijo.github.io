"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

export default function Providers({ children }) {
    useEffect(() => {
        posthog.init("phc_qsg0RrsCd5MdGyDM82lvVv8QbzlI0o2c7aYP7TSDQC6", {
            api_host: "https://us.i.posthog.com",
            capture_pageview: false, // Managed manually via TrackPageView component
            capture_pageleave: true,
            autocapture: true,
        });
    }, []);

    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
