import { NeedModel } from "./need.model";
import { InventoryModel } from "./inventory.model";
import { CommercialBehaviorModel } from "./commercial-behavior.model";

export interface VisitLocalModel {
  id: string;
  startDate: Date;
  needs: NeedModel;
  inventory: InventoryModel;
  commercial: CommercialBehaviorModel;
  observations: string;
}
