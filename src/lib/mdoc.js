const enquiryUrl = "https://shruti.maksoftbox.com//MDocBoxAPI/MdocAddEnquiryORTeleCalling/";

export const projectApiKeys = {
  "radhe-anantam": "090f5f57-8e36-4ce9-a24a-363de7da212f",
  "radhe-shlok": "d2105181-eb99-4d06-b52a-bc1abc65eadd",
  "radhe-windsun": "241656de-f029-42eb-9f11-009f6f6f24bb",
};

export const enquiryProjects = [
  { slug: "radhe-anantam", name: "Radhe Anantam" },
  { slug: "radhe-shlok", name: "Radhe Shlok" },
  { slug: "radhe-windsun", name: "Radhe Windsun" },
];

const possessionValues = {
  "1 year": "Within 1 Yr.",
  "1+ years": "Within 2 Yrs.",
  "Ready to Move": "Ready To Move",
  "Ready To Move": "Ready To Move",
};

const preferenceValues = {
  "1BHK": "1 BHK",
  "1 BHK": "1 BHK",
  "2BHK": "2 BHK",
  "2 BHK": "2 BHK",
  "2.5BHK": "2.5 BHK",
  "2.5 BHK": "2.5 BHK",
  "3BHK": "3 BHK",
  "3 BHK": "3 BHK",
};

export function crmPreference(value) {
  return preferenceValues[value] || "";
}

export function crmPossession(value) {
  return possessionValues[value] || "";
}

export async function pushEnquiry({
  apiKey,
  firstName,
  mobile,
  email,
  preference = "",
  possession = "",
  location = "",
  remark = "",
  sourceDescription = "",
}) {
  if (!apiKey) throw new Error("This project is not set up in the CRM yet.");

  const payload = {
    DataFrom: "E",
    ApiKey: apiKey,
    EnquiryDate: new Date().toISOString().split("T")[0],
    FirstName: firstName.trim().slice(0, 50),
    MobileNo: mobile,
    Email: email.trim(),
    Source: "Digitals",
    SourceDetail: "WebSite",
    Country: "India",
    State: "Maharashtra",
    City: "Pune",
  };

  const mappedPreference = crmPreference(preference);
  const mappedPossession = crmPossession(possession);
  if (mappedPreference) payload.Preferences = mappedPreference;
  if (mappedPossession) payload.PossessionReq = mappedPossession;
  if (location.trim()) payload.PreferredLocation = location.trim().slice(0, 100);
  if (remark.trim()) payload.Remark = remark.trim().slice(0, 500);
  if (sourceDescription.trim()) payload.SourceDescription = sourceDescription.trim().slice(0, 255);

  const response = await fetch(enquiryUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(payload).toString(),
  });
  const data = await response.json().catch(() => null);
  if (!response.ok || !data || data.status !== "success") {
    throw new Error(data?.message || "Failed to submit. Please try again.");
  }
  return data;
}
