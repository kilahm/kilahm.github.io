import { Location } from '@angular/common';
import { Router } from '@angular/router';

export function followDeepLink(
  location: Location,
  router: Router,
): () => Promise<void> {
  return async () => {
    const pathWithHash = location.path(true);
    const pathInHash = pathWithHash.split('#')[1];
    if (pathInHash === undefined) {
      await router.navigate(['/']);
      return;
    }
    await router.navigate([pathInHash]);
  };
}
