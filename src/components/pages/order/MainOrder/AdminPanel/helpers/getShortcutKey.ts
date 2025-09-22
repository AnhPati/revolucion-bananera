import { userAgentType } from "@/utils/windows"

export const getShortcutKey = (userAgent: userAgentType): string => {

    if (userAgent.includes("mac")) return "⌘"
    if (userAgent.includes("win")) return "Ctrl"
    return "Ctrl"
}