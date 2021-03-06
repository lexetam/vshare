"use strict";
var e = [9900459, 9900715, 9900971, 9901227],
    a = [5961409, 5961681, 5961953, 5962225],
    r = [5962242],
    o = [10011018, 10011021],
    n = [16401312, 16401328, 16401344, 16401360],
    d = [16405408, 16405424, 16405440, 16405456],
    s = [11934265, 11934313, 11934361, 11934409, 11934249],
    t = [11934457],
    l = [11684368, 11684624, 11684880, 11685136],
    y = [6071326, 6071342, 6071358, 6071374, 11919299],
    b = [7758101, 7758357, 7758613],
    p = [7758112, 7758368, 7758624, 7758880],
    i = [7758129, 7758385, 7758641, 7758897],
    v = [7758128, 7758384, 7758640, 7758896],
    u = [9441695, 9441951, 9442207, 9442463],
    m = [9445791, 9446047, 9446303, 9446559],
    c = [9453845, 9454101, 9454357, 9454613],
    R = [9449887, 9450143, 9450399, 9450655],
    x = [11025453, 11025501, 11025549, 11025581],
    h = [12525079, 12525095, 12525111, 12525127],
    V = [7093408, 7093424, 7093440, 7093456],
    k = [7089056, 7089072, 7089088, 7089104],
    f = [4200225, 4200481, 4200737],
    M = [9531680, 9531936, 9532192, 9532448],
    z = [9470224, 9470480, 9470736, 9470992],
    g = [9581840, 9778454, 9975068, 10171666],
    P = [11131665, 11001617, 10867473, 10737425],
    N = [9945226, 9945229],
    S = [9453999, 9454255, 9454511, 9454767],
    F = [9449899, 9450155, 9450411, 9450667],
    O = [1370903, 1370919, 1370935, 1370951, 1370983],
    Z = [1370967],
    A = [14748176, 14748432, 14748688, 14748944],
    D = [5085810, 5086050, 5086290, 5086530, 5087010],
    U = [5086770],
    I = [16005648, 16005904, 16006160, 16006416],
    q = [12813574, 12814854, 12816134, 12813318, 12815878],
    C = [12814598],
    K = [10491304, 10491320, 10491336, 10491352],
    T = [10743976, 10743992, 10744008, 10744024],
    j = [9441707, 9441963, 9442219, 9442475],
    w = [9445803, 9446059, 9446315, 9446571],
    B = [15275970, 15277746, 15275682, 15277458];
module.exports = {
    vray15max: {
        label: "V-Ray | 3ds Max",
        version: "1.5",
        products: {
            max15: b
        }
    },
    vray20max: {
        label: "V-Ray | 3ds Max",
        version: "2.0",
        products: {
            max20: p
        }
    },
    vray30max: {
        label: "V-Ray | 3ds Max",
        version: "3.0",
        products: {
            max30: i,
            rendernode30: S
        }
    },
    vray30betamax: {
        label: "V-Ray | 3ds Max",
        version: "3.0 beta",
        products: {
            max30beta: v,
            rendernode30beta: F
        }
    },
    vray15maya: {
        label: "V-Ray | Maya",
        version: "1.5",
        products: {
            maya15: u,
            standalone10: j
        }
    },
    vray20maya: {
        label: "V-Ray | Maya",
        version: "2.0",
        products: {
            maya20: m,
            standalone20: w
        }
    },
    vray30maya: {
        label: "V-Ray | Maya",
        version: "3.0",
        products: {
            maya30: c,
            rendernode30: S
        }
    },
    vray30betamaya: {
        label: "V-Ray | Maya",
        version: "3.0 beta",
        products: {
            maya30beta: R,
            rendernode30beta: F
        }
    },
    vray30revit: {
        label: "V-Ray | Revit",
        version: "3.0",
        products: {
            revit30: O,
            appsdk30: a,
            rendernode30: S
        }
    },
    vray30betarevit: {
        label: "V-Ray | Revit",
        version: "3.0 beta",
        products: {
            revit30beta: Z,
            appsdk30beta: r,
            rendernode30beta: F
        }
    },
    vray30modo: {
        label: "V-Ray | MODO",
        version: "3.0",
        products: {
            modo30: x,
            rendernode30: S
        }
    },
    vray30betamodo: {
        label: "V-Ray | MODO",
        version: "3.0 beta",
        products: {
            modo30beta: h,
            rendernode30beta: F
        }
    },
    vraycloud: {
        label: "V-Ray | Cloud",
        version: "1.5",
        products: {
            queen10: N,
            beekeeper10: o
        }
    },
    vray1520rhino: {
        label: "V-Ray | Rhino",
        version: "1.5/2.0",
        products: {
            rhino1520: A
        }
    },
    vray30rhino: {
        label: "V-Ray | Rhino",
        version: "3.0",
        products: {
            rhino30: D,
            appsdk30: a,
            rendernode30: S
        }
    },
    vray30betarhino: {
        label: "V-Ray | Rhino",
        version: "3.0 beta",
        products: {
            rhino30beta: U,
            appsdk30beta: r,
            rendernode30beta: F
        }
    },
    vray1520sketchup: {
        label: "V-Ray | SketchUp",
        version: "1.5/2.0",
        products: {
            sketchup1520: I
        }
    },
    vray30sketchup: {
        label: "V-Ray | SketchUp",
        version: "3.0",
        products: {
            sketchup30: q,
            appsdk30: a,
            rendernode30: S
        }
    },
    vray30betasketchup: {
        label: "V-Ray | SketchUp",
        version: "3.0 beta",
        products: {
            sketchup30beta: C,
            appsdk30beta: r,
            rendernode30beta: F
        }
    },
    vray15formz: {
        label: "V-Ray | Form-Z",
        version: "1.5",
        products: {
            formz15: n
        }
    },
    vray20formz: {
        label: "V-Ray | Form-Z",
        version: "2.0",
        products: {
            formz20: d
        }
    },
    vray30formz: {
        label: "V-Ray | Form-Z",
        version: "3.0",
        products: {
            formz30: s,
            appsdk30: a,
            rendernode30: S
        }
    },
    vray30betaformz: {
        label: "V-Ray | Form-Z",
        version: "3.0 beta",
        products: {
            formz30beta: t,
            appsdk30beta: r,
            rendernode30beta: F
        }
    },
    vray30nuke: {
        label: "V-Ray | Nuke",
        version: "3.0",
        products: {
            nuke30: V,
            rendernode30: S
        }
    },
    vray30betanuke: {
        label: "V-Ray | Nuke",
        version: "3.0 beta",
        products: {
            nuke30beta: k,
            rendernode30beta: F
        }
    },
    vray30katana: {
        label: "V-Ray | KATANA",
        version: "3.0",
        products: {
            katana10: l,
            rendernode30: S
        }
    },
    vray15softimage: {
        label: "V-Ray | SoftImage",
        version: "1.5",
        products: {
            softimage15: K
        }
    },
    vray30softimage: {
        label: "V-Ray | SoftImage",
        version: "3.0",
        products: {
            softimage30: T
        }
    },
    pdplayer: {
        label: "PDPlayer",
        products: {
            pdplayer: f
        }
    },
    materialscanner: {
        label: "vrscans",
        version: "1.0",
        products: {
            materialscanner: y
        }
    },
    phoenix20max: {
        label: "Phoenix | 3ds Max",
        version: "2.0",
        products: {
            phoenix20max: M
        }
    },
    phoenix20maya: {
        label: "Phoenix | Maya",
        version: "2.0",
        products: {
            phoenix20maya: z
        }
    },
    phoenix30max: {
        label: "Phoenix | 3ds Max",
        version: "3.0",
        products: {
            phoenix30max: g,
            simnode30: B
        }
    },
    phoenix30maya: {
        label: "Phoenix | Maya",
        version: "3.0",
        products: {
            phoenix30maya: P,
            simnode30: B
        }
    },
    rendernode30: {
        label: "V-Ray | Render Node",
        version: "3.0",
        products: {
            rendernode30: S
        }
    },
    rendernode30beta: {
        label: "V-Ray | Render Node",
        version: "3.0 beta",
        products: {
            rendernode30beta: F
        }
    }
};
