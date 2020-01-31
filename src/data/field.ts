import { water, grass, road, rock, sand } from "./cell-generators";

export default [
    [rock, rock, rock, grass, grass, grass, grass, grass],
    [rock, water, grass, road, grass, grass, grass, grass],
    [water, water, grass, road, grass, grass, grass, grass],
    [water, grass, grass, road, grass, grass, grass, sand],
    [grass, grass, grass, road, grass, grass, sand, sand],
    [grass, grass, grass, road, grass, sand, sand, sand],
    [grass, grass, grass, road, sand, sand, sand, water],
    [grass, grass, grass, road, sand, sand, water, water],
];
