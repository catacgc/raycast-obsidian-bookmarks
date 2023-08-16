import axios from "axios";
import { Link, Preferences } from "./bookmarks";

export async function searchBookmarks(preferences: Preferences) {
    let body = `
    TABLE L.text as text, file.path as path, L.section as section, L.tags as tags
    FROM ${preferences.tagName}
    FLATTEN file.lists as L
    WHERE contains(L.text, "http://") or contains(L.text, "https://")
    `
    
    return await axios<Link[]>({
        method: "POST",
        baseURL: 'http://127.0.0.1:27123/',
        url: '/search/',
        data: body,
        timeout: 5000,
        headers: {
          "Content-Type": "application/vnd.olrapi.dataview.dql+txt",
          "Authorization": `Bearer ${preferences.token}`,
        },

    })
}