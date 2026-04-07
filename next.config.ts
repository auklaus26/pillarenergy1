import type { NextConfig } from "next";

const repoName = "pillarenergy1";
const useRepoBasePath = process.env.USE_REPO_BASE_PATH === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: useRepoBasePath ? `/${repoName}` : "",
  assetPrefix: useRepoBasePath ? `/${repoName}/` : undefined
};

export default nextConfig;
