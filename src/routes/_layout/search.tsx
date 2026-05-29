import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/search')({
  component: SearchPageComponent,
});

function SearchPageComponent() {
  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
}
