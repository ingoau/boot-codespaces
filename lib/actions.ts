"use server";

import { Octokit } from "octokit";
import { auth } from "./auth";
import { headers } from "next/headers";

export async function createCodespace() {
  const headersList = await headers();

  const { accessToken } = await auth.api.getAccessToken({
    headers: headersList,
    body: {
      providerId: "github",
    },
  });

  const octokit = new Octokit({
    auth: accessToken,
  });

  const response = await octokit.request(
    "POST /repos/{owner}/{repo}/codespaces",
    {
      owner: "Inglan",
      repo: "boot-codespaces",
      ref: "main",
      machine: "standardLinux32gb",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  return response.data.name;
}
