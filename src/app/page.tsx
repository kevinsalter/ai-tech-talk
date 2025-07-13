import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the first slide
  redirect('/slide/1');
}
