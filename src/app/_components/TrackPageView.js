"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";

export default function TrackPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            let url = typeof window !== 'undefined' ? window.location.origin + pathname : pathname;
            if (searchParams && searchParams.toString()) {
                url = `${url}?${searchParams.toString()}`;
            }
            posthog.capture("$pageview", {
                $current_url: url,
                path: pathname,
                title: typeof document !== 'undefined' ? document.title : '',
            });
        }
    }, [pathname, searchParams]);

    return null;
}
