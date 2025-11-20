import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card } from "./ui/card";

export interface DemoParams {
  decoderOn: boolean;
  updateSpeed: number;
  gridSize: number;
  timeWindow: number;
  bitFlipRate: number;
  measurementErrorRate: number;
  velocity: number;
  boundaryCondition: "open" | "periodic";
}

interface DemoControlsProps {
  params: DemoParams;
  onParamsChange: (params: DemoParams) => void;
  syndromeCount: number;
  correctionCount: number;
}

export function DemoControls({
  params,
  onParamsChange,
  syndromeCount,
  correctionCount,
}: DemoControlsProps) {
  const updateParam = <K extends keyof DemoParams>(
    key: K,
    value: DemoParams[K],
  ) => {
    onParamsChange({ ...params, [key]: value });
  };

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg text-[#553128] mb-4">
          Parameters
        </h3>
      </div>

      {/* Decoder Toggle */}
      <div className="flex items-center justify-between py-2 px-3 bg-white rounded-lg border border-[#F4A135]/10">
        <Label
          htmlFor="decoder-toggle"
          className="text-sm text-[#553128]"
        >
          Decoder Active
        </Label>
        <Switch
          id="decoder-toggle"
          checked={params.decoderOn}
          onCheckedChange={(checked) =>
            updateParam("decoderOn", checked)
          }
        />
      </div>

      {/* Update Speed */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label className="text-sm text-[#553128]">
            Update Speed
          </Label>
          <span className="text-xs text-[#553128]/70">
            {params.updateSpeed} fps
          </span>
        </div>
        <Slider
          value={[params.updateSpeed]}
          onValueChange={([value]) =>
            updateParam("updateSpeed", value)
          }
          min={1}
          max={20}
          step={1}
          className="w-full"
        />
      </div>

      {/* Grid Size */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label className="text-sm text-[#553128]">
            Grid Size
          </Label>
          <span className="text-xs text-[#553128]/70">
            {params.gridSize}×{params.gridSize}
          </span>
        </div>
        <Slider
          value={[params.gridSize]}
          onValueChange={([value]) =>
            updateParam("gridSize", value)
          }
          min={20}
          max={100}
          step={5}
          className="w-full"
        />
      </div>

      {/* Time Window */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label className="text-sm text-[#553128]">
            Time Window
          </Label>
          <span className="text-xs text-[#553128]/70">
            {params.timeWindow}
          </span>
        </div>
        <Slider
          value={[params.timeWindow]}
          onValueChange={([value]) =>
            updateParam("timeWindow", value)
          }
          min={6}
          max={20}
          step={1}
          className="w-full"
        />
      </div>

      {/* Bit Flip Rate */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label className="text-sm text-[#553128]">
            Bit Flip Rate
          </Label>
          <span className="text-xs text-[#553128]/70">
            {params.bitFlipRate.toFixed(4)}
          </span>
        </div>
        <Slider
          value={[params.bitFlipRate * 1000]}
          onValueChange={([value]) =>
            updateParam("bitFlipRate", value / 1000)
          }
          min={0}
          max={50}
          step={0.1}
          className="w-full"
        />
      </div>

      {/* Measurement Error Rate */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label className="text-sm text-[#553128]">
            Measurement Error Rate
          </Label>
          <span className="text-xs text-[#553128]/70">
            {params.measurementErrorRate.toFixed(4)}
          </span>
        </div>
        <Slider
          value={[params.measurementErrorRate * 1000]}
          onValueChange={([value]) =>
            updateParam("measurementErrorRate", value / 1000)
          }
          min={0}
          max={50}
          step={0.1}
          className="w-full"
        />
      </div>

      {/* Velocity */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label className="text-sm text-[#553128]">
            Message Passing Velocity
          </Label>
          <span className="text-xs text-[#553128]/70">
            {params.velocity}
          </span>
        </div>
        <Slider
          value={[params.velocity]}
          onValueChange={([value]) =>
            updateParam("velocity", Math.max(3, value))
          }
          min={3}
          max={20}
          step={1}
          className="w-full"
        />
      </div>

      {/* Boundary Condition */}
      <div className="space-y-2">
        <Label className="text-sm text-[#553128]">
          Boundary Condition
        </Label>
        <Select
          value={params.boundaryCondition}
          onValueChange={(value: "open" | "periodic") =>
            updateParam("boundaryCondition", value)
          }
        >
          <SelectTrigger className="w-full border-[#F4A135]/20 bg-white text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="periodic">Periodic</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}