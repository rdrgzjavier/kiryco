export type TrackingAction = "view_detail" | "contact_whatsapp" | "contact_email" | "contact_phone" | "external_web" | "share" | "save_favorite" | "search" | "publish";

export function trackingAttrs(action: TrackingAction, params: Record<string, string | number | undefined>) {
  return Object.fromEntries(
    Object.entries({
      "data-track-action": action,
      ...Object.fromEntries(Object.entries(params).map(([key, value]) => [`data-track-${key}`, value]))
    }).filter(([, value]) => value !== undefined)
  );
}
