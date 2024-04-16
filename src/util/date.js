import { format } from "timeago.js";

export const formatAgo = (publishedAt) => {
    return format(publishedAt);
}