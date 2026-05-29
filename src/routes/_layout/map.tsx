import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/map')({
  component: MapPageComponent,
});

function MapPageComponent() {
  return (
    <div>
      <h1>Map Page</h1>
    </div>
  );
}
