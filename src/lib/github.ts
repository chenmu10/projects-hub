// Build-time fetch of GitHub stars. Fails soft: the site must build offline
// or when rate-limited, so any error returns null and the UI omits the count.
export async function fetchStars(repo?: string): Promise<number | null> {
  if (!repo) return null;
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
  } catch {
    return null;
  }
}
