/**
 * Registration Service API Abstraction
 * Configured to interface with `POST /api/registrations`
 */

export const submitRegistration = async (registrationData) => {
  // Simulate network API request delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Validate basic payload integrity
  if (!registrationData.teamName || !registrationData.teamLeader?.name || !registrationData.teamLeader?.email) {
    throw new Error("Invalid registration payload: Missing required team details.");
  }

  // Generate unique Registration ID format: CF2026-XXXX
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const registrationId = `CF2026-${randomSuffix}`;

  return {
    success: true,
    status: 201,
    message: "Your team registration has been submitted successfully.",
    data: {
      registrationId,
      teamName: registrationData.teamName,
      teamSize: registrationData.teamSize,
      submittedAt: new Date().toISOString(),
      teamLeader: registrationData.teamLeader,
      membersCount: registrationData.members ? registrationData.members.length + 1 : 1
    }
  };
};
