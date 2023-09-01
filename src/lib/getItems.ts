import { cache } from "react";
import pb from "./pocketbase";

export const revalidate = 3600;

export const getItems = cache(async () => {
    const items = (await pb.collection("kantan_tasks").getList(1, 20));
    return items;
})