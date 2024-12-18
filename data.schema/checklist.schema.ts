import { z } from "zod";

enum PriorityStatus {
  Minor,
  Major,
  Critical,
  Blocker,
}

enum ProgressStatus {
  ToDo = "To Do",
  InProgress = "In Progress",
  Done = "Done",
}

const ItemSteps = z.object({
  id: z.number(),
  description: z.string(),
});

const ItemChecklistSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.nativeEnum(PriorityStatus),
  progressStatus: z.nativeEnum(ProgressStatus),
  steps: ItemSteps.array().optional(),
});

const ChecklistSchema = z.object({
  count: z.number(),
  progressStatus: z.nativeEnum(ProgressStatus),
  items: ItemChecklistSchema.array(),
});

type TChecklistSchema = z.infer<typeof ChecklistSchema>;
type TItemChecklistSchema = z.infer<typeof ItemChecklistSchema>;

export {
  PriorityStatus,
  ProgressStatus,
  TChecklistSchema,
  TItemChecklistSchema,
};
