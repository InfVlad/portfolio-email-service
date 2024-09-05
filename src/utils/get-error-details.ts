import type { StringIssue, ObjectIssue } from "valibot";

type ValidationIssue = StringIssue | ObjectIssue;

type MappedErrorDetail = {
  field?: string;
  message: string;
};

export const getValidationIssues = (
  issues: ValidationIssue[]
): MappedErrorDetail[] => {
  return issues.map((issue) => ({
    field: issue.path?.map((p) => p.key).join("."),
    message: issue.message,
  }));
};
