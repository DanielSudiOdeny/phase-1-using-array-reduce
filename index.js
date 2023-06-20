const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries;

const totalNoOfbatteries = batteryBatches.reduce(function (
  accumulator,
  batteryBatch
) {
  totalBatteries = batteryBatch + accumulator;
  return totalBatteries;
});
