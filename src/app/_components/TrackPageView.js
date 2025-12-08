"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { usePathname, useSearchParams } from "next/navigation";

export default function TrackPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = `${pathname}?${searchParams.toString()}`;
        posthog.capture("$pageview", { url });
    }, [pathname, searchParams]);

    return null;
}
