// This part of the schema is currently available for developers to preview
// https://developer.github.com/v4/previews/#github-packages
export const getPackages = `query {
  viewer {
    packages(first: 10) {
      nodes {
        id
        name
        latestVersion {
          id
          version
        }
        packageType
      }
    }
  }
}`;
