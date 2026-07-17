export interface user {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string | null;
  role: "admin" | "user"
}