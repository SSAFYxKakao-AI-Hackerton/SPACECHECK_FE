import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <h1 className="text-red-300">Home</h1>
    </div>
  );
}
