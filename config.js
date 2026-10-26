
module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  res.setHeader("Cache-Control", "no-store");

  return res.status(200).json({
    status: "online",
    project: "MOCO AIM CONFIG V1",
    aimCollider: {
      enabled: true,
      targetPart: "Head",
      maxDistance: 30,
      maxAngle: 20,
      smoothness: 5,
      visibleTargetsOnly: true
    }
  });
};
