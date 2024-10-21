export type Layout = {
    id: string;
    name: string;
    width: number;
    height: number;
    previewImage: string
    type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
    gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west"
    aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left"
    source?: boolean
    
}