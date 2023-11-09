import { z } from "zod";

const BASE_URL = "https://chewie-webapp-ld2ijhpvmb34c.azurewebsites.net";

const employeeDto = z.object({
  email: z.string(),
  name: z.string(),
  telephone: z.string().nullable().optional(),
  imageUrl: z.string(),
  officeName: z.string(),
  startDate: z.string(),
});

type EmployeeDto = z.infer<typeof employeeDto>;

export async function getEmployee(email: string): Promise<EmployeeDto | null> {
  const [alias, country] = extractUserInfo(email);
  const response = await fetch(
    `${BASE_URL}/employees/${alias}?country=${country}`
  );
  if (!response.ok) return null;
  const data = await response.json();
  const parsed = employeeDto.safeParse(data);
  if (parsed.success) {
    return parsed.data;
  }
  return null;
}

function extractUserInfo(email: string): [alias: string, country: string] {
  const [alias, country] = email.split("@variant.");
  return [alias, country];
}
