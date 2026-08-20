import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/read/$chapterId")({
  component: () => <Outlet />,
});
