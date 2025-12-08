"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

export default function Providers({ children }) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
            capture_pageview: false, // We'll do manual tracking
        });

        console.log("PH KEY:", process.env.NEXT_PUBLIC_POSTHOG_KEY);
    }, []);

    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
