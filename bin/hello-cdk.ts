#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { HelloCdkStack } from "../lib/hello-cdk-stack";
import { env } from "process";

const app = new cdk.App();
new HelloCdkStack(app, "HelloCdkStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  tags: {
    project: "backend",
    env: process.env.CKD_DEFAULT_REGION ?? "dev",
    owner: "software-team",
  },
});
