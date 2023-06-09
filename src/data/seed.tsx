import { data } from './recipes';

export async function seedRecipes() {
  const response = await fetch('https://restapi.fr/api/wizardrecipes');
  if (response.ok) {
    const recipes = await response.json();
    if (!recipes.length) {
      await fetch('https://restapi.fr/api/wizardrecipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([...data, ...data, ...data]),
      });
    }
  }
}
