const inbox = "radhegroup30@gmail.com";

export async function sendEnquiryEmail({ subject, name, email, fields, confirmation }) {
  const body = new FormData();
  body.append("name", name || "Website visitor");
  body.append("email", email || inbox);
  body.append("_subject", subject || "New website enquiry");
  if (confirmation) body.append("_auto-response", confirmation);
  Object.entries(fields || {}).forEach(([label, value]) => {
    body.append(label, value == null || value === "" ? "Not provided" : String(value));
  });

  const response = await fetch(`https://000form.com/f/${inbox}`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  });
  const data = await response.json().catch(() => null);
  if (response.ok && data?.success) return data;

  const message = data?.message || "";
  if (/not verified/i.test(message)) {
    throw new Error("Open radhegroup30@gmail.com and click the confirmation link once. After that, every form will arrive there. No account is needed.");
  }
  throw new Error(message || "Could not email the enquiry. Please try again.");
}
