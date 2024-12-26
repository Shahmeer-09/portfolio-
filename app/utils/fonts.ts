import { Roboto} from "next/font/google";

export const robotoSerif = Roboto({ 
    subsets: ["latin"] ,
    weight: ["100","300", "400","500", "700", "900"],
    display: "swap",
    variable: "--font-roboto-serif"

});


export const RobotoSerif= robotoSerif.className