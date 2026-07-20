import { redirect } from "next/navigation";
import { DEFAULT_MICROSITE } from "@/config/microsites";

// The platform root has no landing page of its own yet, so it forwards to the
// one live microsite. Repoint it by changing DEFAULT_MICROSITE in
// config/microsites.ts — or replace this file with a real directory page once
// several events run at once.
export default function RootPage() {
  redirect(`/${DEFAULT_MICROSITE}`);
}
