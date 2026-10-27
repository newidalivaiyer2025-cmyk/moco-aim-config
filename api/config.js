
module.exports = function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  return res.status(200).json({
    status: "online",
    message: "MOCO CONFIG API WORKING",
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
