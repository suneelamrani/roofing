const PARAM_KEYS = [
    "gclid",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_keyword",
    "campaign_id",
    "ad_group_id",
    "ad_id",
    "msclkid",
] as const;

export function getTrackingParams(): Record<string, string> {
    const query = new URLSearchParams(window.location.search);
    const params: Record<string, string> = {};

    for (const key of PARAM_KEYS) params[key] = query.get(key) ?? "";

    params.pageUrl = window.location.href;
    params.referrer = document.referrer;
    params.leadSource = "Website";
    return params;
}