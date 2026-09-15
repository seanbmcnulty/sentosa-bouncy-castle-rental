import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Check, n as Minus, r as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as isWhatsAppReady, i as SITE, n as DEFAULT_WHATSAPP_TEXT, o as whatsappUrl, r as PHOTOS } from "./router-D0c6dJ4T.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DAb6z27a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-wide transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-charcoal text-charcoal-fg hover:bg-ink",
			outline: "border border-line bg-transparent text-ink hover:bg-cream hover:border-ink/20",
			ghost: "text-ink hover:bg-paper-deep",
			cream: "bg-cream text-ink hover:bg-paper shadow-soft"
		},
		size: {
			sm: "h-10 px-4 text-sm",
			default: "h-11 px-5",
			lg: "h-12 px-6"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function SiteMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-7", className),
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M6 14h4V9h4v5h4V9h4v5h4v14H6V14Z",
			stroke: "currentColor",
			strokeWidth: "1.4",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M13 28v-7.5a3 3 0 0 1 6 0V28",
			stroke: "currentColor",
			strokeWidth: "1.4",
			strokeLinejoin: "round"
		})]
	});
}
var NAV = [
	{
		href: "#gallery",
		label: "Gallery"
	},
	{
		href: "#pricing",
		label: "Pricing"
	},
	{
		href: "#how",
		label: "How it works"
	},
	{
		href: "#rules",
		label: "Rules"
	}
];
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-w-0 items-center gap-2.5 text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteMark, { className: "size-6 shrink-0 sm:size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-serif text-lg font-medium tracking-tight sm:text-xl",
						children: SITE.shortName
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm text-stone transition-colors duration-150 hover:text-ink",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#book",
						className: cn(buttonVariants({
							variant: "primary",
							size: "sm"
						}), "sm:h-11 sm:px-5"),
						children: "Book now"
					})
				})
			]
		})
	});
}
function MobileDock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-lg gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#book",
				className: cn(buttonVariants({ variant: "primary" }), "h-12 flex-1"),
				children: "Book now"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#book",
				className: cn(buttonVariants({ variant: "outline" }), "h-12 flex-1"),
				children: "WhatsApp"
			})]
		})
	});
}
function WhatsAppLink({ className, variant = "outline", size = "default", label = "WhatsApp us", prefill = DEFAULT_WHATSAPP_TEXT }) {
	const href = whatsappUrl(prefill);
	if (isWhatsAppReady() && href) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "size-4",
			"aria-hidden": "true"
		}), label]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant,
		size,
		className,
		title: `WhatsApp number placeholder: ${SITE.whatsappDisplay}. Swap it in src/lib/site.ts.`,
		onClick: () => {
			document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "size-4",
			"aria-hidden": "true"
		}), label]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative isolate",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-[88svh] overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: PHOTOS.hero.src,
					alt: PHOTOS.hero.alt,
					className: "absolute inset-0 size-full object-cover object-center",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-linear-to-t from-ink/80 via-ink/25 to-ink/15",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pb-32 pt-28 sm:px-8 sm:pb-20 lg:pb-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stagger-in max-w-2xl text-cream",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-[0.22em] text-cream/80 uppercase",
								children: "Sentosa Island · Kids’ parties"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-serif text-4xl leading-[1.08] font-medium tracking-tight text-cream sm:text-6xl lg:text-7xl",
								children: "The all-white bounce house for Sentosa."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg",
								children: [
									"An Oxford inflatable with slide.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-cream",
										children: [
											"S$",
											SITE.priceSgd,
											" a day"
										]
									}),
									", free delivery and pickup on Sentosa Island. You inflate it. We collect it."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#book",
									className: cn(buttonVariants({
										variant: "cream",
										size: "lg"
									}), "h-12"),
									children: "Book now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLink, {
									variant: "outline",
									size: "lg",
									className: "h-12 border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-cream/75",
								children: "CE / KC certified · We deliver and pick up only — you set up and pack down"
							})
						]
					})
				})
			]
		})
	});
}
function Notice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-line bg-paper-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto max-w-6xl px-5 py-3.5 text-center text-sm text-ink sm:px-8",
			children: [
				"We only deliver and pick up.",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: "You set up and pack down yourselves."
				}),
				" ",
				"Free on Sentosa Island — nowhere else."
			]
		})
	});
}
function Gallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	const photos = PHOTOS.gallery;
	const open = photos.find((p) => p.src === active) ?? null;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onKey(e) {
			if (e.key === "Escape") setActive(null);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "scroll-mt-20 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-mist uppercase",
						children: "The castle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl",
						children: "Quiet white. Made for lawns and function rooms."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base leading-relaxed text-stone",
						children: [
							"All-white Oxford inflatable with slide — not a carnival. The photos below are style placeholders; swap the files in",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink",
								children: "/public/images/"
							}),
							" for real party shots when you have them."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6",
				children: photos.map((photo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(photo.src),
					className: cn("group relative overflow-hidden rounded-xl bg-paper-deep text-left shadow-soft", i === 0 && "sm:col-span-2 lg:col-span-4 lg:row-span-2 min-h-72 lg:min-h-96", i === 1 && "lg:col-span-2 min-h-56", i === 2 && "lg:col-span-2 min-h-56", i === 3 && "sm:col-span-2 lg:col-span-6 min-h-56 lg:min-h-80"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.src,
						alt: photo.alt,
						className: "img-frame size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/50 to-transparent p-4 pt-10 text-xs text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100",
						children: photo.caption
					})]
				}, photo.src))
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Photo",
			onClick: () => setActive(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: open.src,
				alt: open.alt,
				className: "max-h-[88svh] max-w-full rounded-lg object-contain shadow-soft"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-4 right-4 rounded-md bg-cream px-3 py-2 text-sm text-ink",
				onClick: () => setActive(null),
				children: "Close"
			})]
		}) : null]
	});
}
var included = [
	"All-white Oxford bounce house with slide",
	"Electric blower",
	"Free delivery on Sentosa Island",
	"Free pickup on Sentosa Island"
];
var notIncluded = [
	"Setup or pack-down — that’s you",
	"Staffing or on-site supervision",
	"Islandwide or mainland delivery"
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "scroll-mt-20 bg-cream py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.22em] text-mist uppercase",
					children: "Pricing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl",
					children: "One rate. One island."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-base leading-relaxed text-stone",
					children: "Built for kids’ birthdays, condo functions and hotel events on Sentosa. Clear space, a nearby power point, and a few minutes to inflate — that’s all you need."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-paper p-6 shadow-soft sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-stone",
						children: "Per day"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-serif text-6xl leading-none font-medium tracking-tight",
						children: ["S$", SITE.priceSgd]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-stone",
						children: SITE.depositNote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-8 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-xs font-medium tracking-[0.18em] text-mist uppercase",
								children: "Included"
							}), included.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5 text-sm leading-snug",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-0.5 size-4 shrink-0 text-ok",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-xs font-medium tracking-[0.18em] text-mist uppercase",
								children: "Not included"
							}), notIncluded.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5 text-sm leading-snug text-stone",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
									className: "mt-0.5 size-4 shrink-0",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#book",
						className: cn(buttonVariants({
							variant: "primary",
							size: "lg"
						}), "mt-8 h-12 w-full"),
						children: "Book this date"
					})
				]
			})]
		})
	});
}
var STEPS = [
	{
		n: "01",
		title: "Book",
		body: "Send the date, Sentosa address, and your delivery and pickup windows. We’ll confirm availability."
	},
	{
		n: "02",
		title: "We deliver",
		body: "We drop the packed castle and blower at your condo or hotel on Sentosa. That’s our job."
	},
	{
		n: "03",
		title: "You inflate & enjoy",
		body: "Plug in a nearby power point, inflate, and host. Adult supervision is on you for the whole booking."
	},
	{
		n: "04",
		title: "We collect",
		body: "You pack it down dry. We pick up the same evening or the next morning — your choice."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "scroll-mt-20 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.22em] text-mist uppercase",
					children: "How it works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-serif text-4xl font-medium tracking-tight sm:text-5xl",
					children: "Four steps. You do the middle."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-base leading-relaxed text-stone",
					children: "We do not set up, inflate, staff, or pack down the castle. If that isn’t the arrangement you want, we aren’t the right rental."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-px overflow-hidden rounded-2xl bg-line shadow-soft sm:grid-cols-2 lg:grid-cols-4",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-cream p-6 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-3xl text-mist",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-serif text-2xl font-medium tracking-tight",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-stone",
								children: step.body
							})
						]
					}, step.n))
				})
			]
		})
	});
}
var ROWS = [
	{
		label: "Size",
		value: SITE.size
	},
	{
		label: "Material",
		value: SITE.material
	},
	{
		label: "Layout",
		value: "Bounce house with attached slide"
	},
	{
		label: "Power",
		value: "Blower included. Nearby 13A power point required."
	},
	{
		label: "Setup",
		value: "Self-setup and self pack-down. We do not inflate or staff."
	},
	{
		label: "Safety",
		value: "CE / KC certified. Suitable for kids’ parties with adult supervision."
	},
	{
		label: "Best for",
		value: "Birthdays, condo functions, hotel events on Sentosa."
	},
	{
		label: "Where we go",
		value: "Sentosa Island only for free delivery and pickup."
	}
];
function Specs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "specs",
		className: "scroll-mt-20 bg-cream py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.22em] text-mist uppercase",
					children: "Specs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl",
					children: "What you’re renting."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 divide-y divide-line border-y border-line",
					children: ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm font-medium",
							children: row.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-sm leading-relaxed text-stone sm:text-base",
							children: row.value
						})]
					}, row.label))
				})
			]
		})
	});
}
var RULES = [
	{
		title: "Sentosa only",
		body: "Free delivery and pickup are for Sentosa Island only. We do not offer islandwide free delivery."
	},
	{
		title: "Self-setup",
		body: "We deliver and pick up. You inflate, supervise, and pack down. We do not set up or staff the castle."
	},
	{
		title: "Power point",
		body: "The blower needs a nearby 13A power point for the whole booking. No power, no bounce."
	},
	{
		title: "Clear space",
		body: `You need a reasonably flat, clear area larger than 4m × 4.5m — lawn, function deck, or indoor hall with ceiling height to spare.`
	},
	{
		title: "Damage deposit",
		body: "A refundable damage deposit is required. Amount is S$150, confirmed on booking."
	},
	{
		title: "Supervision",
		body: "An adult must supervise children the entire time the castle is inflated. This is not a staffed attraction."
	}
];
function Rules() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rules",
		className: "scroll-mt-20 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.22em] text-mist uppercase",
					children: "Fine print"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-serif text-4xl font-medium tracking-tight sm:text-5xl",
					children: "Please read this before you book."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: RULES.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-cream p-6 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl font-medium tracking-tight",
							children: rule.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-stone",
							children: rule.body
						})]
					}, rule.title))
				})
			]
		})
	});
}
var fieldClass = "mt-1.5 h-11 w-full rounded-md border border-line bg-cream px-3 text-sm text-ink outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-mist focus:border-ink/30 focus:ring-2 focus:ring-ink/15";
var labelClass = "block text-sm font-medium";
function formatEnquiry(data) {
	const windowLabel = SITE.deliveryWindows.find((w) => w.value === data.deliveryWindow)?.label ?? data.deliveryWindow;
	const pickupLabel = SITE.pickupOptions.find((p) => p.value === data.pickup)?.label ?? data.pickup;
	return [
		`New bounce house enquiry — ${SITE.name}`,
		``,
		`Name: ${data.fullName}`,
		`Mobile / WhatsApp: ${data.mobile}`,
		`Email: ${data.email}`,
		`Event date: ${data.eventDate}`,
		`Delivery window: ${windowLabel}`,
		`Pickup: ${pickupLabel}`,
		`Venue: ${data.venueName}`,
		`Address: ${data.address}`,
		`Clear space: ${data.clearSpace}`,
		`Approx. kids: ${data.kidsCount}`,
		data.notes ? `Notes: ${data.notes}` : null,
		``,
		`Confirmed: venue is on Sentosa; self-setup; power point available.`,
		`Agrees to S$${SITE.priceSgd}/day + refundable damage deposit.`
	].filter(Boolean).join("\n");
}
function GoogleForm() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-2xl bg-cream shadow-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title: "Booking form",
			src: SITE.googleFormEmbedUrl,
			className: "h-[52rem] w-full border-0"
		})
	});
}
function Booking() {
	const [sent, setSent] = (0, import_react.useState)(null);
	const today = (0, import_react.useMemo)(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), []);
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		if (!form.reportValidity()) return;
		const fd = new FormData(form);
		const data = {
			fullName: String(fd.get("fullName") ?? ""),
			mobile: String(fd.get("mobile") ?? ""),
			email: String(fd.get("email") ?? ""),
			eventDate: String(fd.get("eventDate") ?? ""),
			deliveryWindow: String(fd.get("deliveryWindow") ?? ""),
			pickup: String(fd.get("pickup") ?? ""),
			address: String(fd.get("address") ?? ""),
			venueName: String(fd.get("venueName") ?? ""),
			clearSpace: String(fd.get("clearSpace") ?? ""),
			kidsCount: String(fd.get("kidsCount") ?? ""),
			notes: String(fd.get("notes") ?? "")
		};
		setSent(data);
		try {
			localStorage.setItem("sbcr-last-enquiry", JSON.stringify(data));
		} catch {}
		const href = whatsappUrl(formatEnquiry(data));
		if (href) window.open(href, "_blank", "noopener,noreferrer");
	}
	const waAfterSend = sent ? whatsappUrl(formatEnquiry(sent)) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "book",
		className: "scroll-mt-20 bg-paper-deep py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.22em] text-mist uppercase",
					children: "Book online"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl",
					children: "Request a date."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-base leading-relaxed text-stone",
					children: "This is an enquiry — we’ll confirm availability, the refundable damage deposit, and delivery timing. No payment is taken here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: SITE.googleFormEmbedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleForm, {}) : sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessCard, {
						enquiry: sent,
						waHref: waAfterSend,
						onReset: () => setSent(null)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "rounded-2xl bg-cream p-5 shadow-soft sm:p-8",
						noValidate: false,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "sr-only",
										children: "Your details"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Full name",
										name: "fullName",
										autoComplete: "name",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Mobile / WhatsApp",
										name: "mobile",
										type: "tel",
										autoComplete: "tel",
										inputMode: "tel",
										required: true,
										placeholder: "+65"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										name: "email",
										type: "email",
										autoComplete: "email",
										required: true,
										className: "sm:col-span-2"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "mt-8 grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "col-span-full font-serif text-xl font-medium",
										children: "When"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Event date",
										name: "eventDate",
										type: "date",
										required: true,
										min: today
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Preferred delivery window"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 grid grid-cols-3 gap-2",
										children: SITE.deliveryWindows.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex min-h-11 cursor-pointer flex-col items-center justify-center rounded-md border border-line bg-paper px-2 py-2 text-center has-checked:border-ink has-checked:bg-paper-deep",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "radio",
													name: "deliveryWindow",
													value: w.value,
													required: true,
													className: "sr-only",
													defaultChecked: w.value === "morning"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-medium",
													children: w.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-mist",
													children: w.hint
												})
											]
										}, w.value))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelClass,
											children: "Preferred pickup"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 grid gap-2 sm:grid-cols-2",
											children: SITE.pickupOptions.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-line bg-paper px-3 py-2 text-sm font-medium has-checked:border-ink has-checked:bg-paper-deep",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "radio",
													name: "pickup",
													value: p.value,
													required: true,
													className: "sr-only",
													defaultChecked: i === 0
												}), p.label]
											}, p.value))
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "mt-8 grid gap-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "font-serif text-xl font-medium",
										children: "Venue"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Condo / hotel name",
										name: "venueName",
										required: true,
										placeholder: "e.g. The Residences at W, Sentosa Cove"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Sentosa delivery address",
										name: "address",
										required: true,
										placeholder: "Unit, building, Sentosa"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Approx. clear space",
											name: "clearSpace",
											required: true,
											placeholder: "e.g. 6m × 6m lawn"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Approx. number of kids",
											name: "kidsCount",
											type: "number",
											min: "1",
											required: true,
											inputMode: "numeric"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "notes",
										className: labelClass,
										children: "Notes / access instructions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "notes",
										name: "notes",
										rows: 4,
										className: cn(fieldClass, "h-auto py-2.5"),
										placeholder: "Gate code, loading bay, which lawn…"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "mt-8 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "font-serif text-xl font-medium",
										children: "Please confirm"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
										name: "onSentosa",
										label: "The venue is on Sentosa Island."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
										name: "selfSetup",
										label: "I will set up and pack down the castle myself. You only deliver and collect."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
										name: "powerPoint",
										label: "A nearby power point is available for the blower."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
										name: "agreePrice",
										label: `I agree to S$${SITE.priceSgd} per day plus a refundable damage deposit (amount confirmed on booking).`
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "mt-8 h-12 w-full",
								children: "Send enquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center text-xs text-mist",
								children: isWhatsAppReady() ? "Submitting also opens WhatsApp with your details." : `WhatsApp number is still a placeholder (${SITE.whatsappDisplay}). Use this form for now.`
							})
						]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:pt-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-cream p-6 shadow-soft lg:sticky lg:top-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl font-medium",
							children: "At a glance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-3 text-sm leading-relaxed text-stone",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"S$",
									SITE.priceSgd,
									" per day"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Free delivery & pickup on Sentosa only" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "You inflate, supervise, and pack down" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Blower included · power point required" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: SITE.sizeShort }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: SITE.depositNote })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLink, {
								variant: "outline",
								className: "w-full"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-mist",
							children: [
								"WhatsApp: ",
								SITE.whatsappDisplay,
								isWhatsAppReady() ? "" : " · placeholder"
							]
						})
					]
				})
			})]
		})
	});
}
function Field({ label, name, className, ...props }) {
	const id = name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: labelClass,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			name,
			className: fieldClass,
			...props
		})]
	});
}
function CheckRow({ name, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex cursor-pointer gap-3 rounded-md border border-line bg-paper p-3 text-sm leading-snug has-checked:border-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			name,
			required: true,
			value: "yes",
			className: "mt-0.5 size-4 shrink-0 accent-charcoal"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function SuccessCard({ enquiry, waHref, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-cream p-6 shadow-soft sm:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 items-center justify-center rounded-full bg-ok/10 text-ok",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-5",
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-serif text-3xl font-medium tracking-tight",
				children: "Enquiry received."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-md text-sm leading-relaxed text-stone",
				children: [
					"We’ll confirm ",
					enquiry.eventDate,
					" at ",
					enquiry.venueName,
					". Keep an eye on WhatsApp and email. Nothing is booked until we reply."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-6 overflow-x-auto rounded-lg bg-paper p-4 text-xs leading-relaxed text-stone whitespace-pre-wrap",
				children: formatEnquiry(enquiry)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-2 sm:flex-row",
				children: [waHref ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: waHref,
					target: "_blank",
					rel: "noopener noreferrer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						className: "w-full sm:w-auto",
						children: "Open WhatsApp"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLink, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: onReset,
					children: "Send another"
				})]
			})
		]
	});
}
function Footer() {
	const wa = whatsappUrl();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-paper pb-24 md:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteMark, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-xl font-medium",
					children: SITE.name
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-sm text-sm leading-relaxed text-stone",
				children: [
					"All-white bounce house rental for Sentosa Island. S$",
					SITE.priceSgd,
					" a day. We deliver and collect — you set up and pack down."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm text-stone",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-ink",
						children: "WhatsApp"
					}),
					wa ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: wa,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-1 inline-block hover:text-ink",
						children: SITE.whatsappDisplay
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1",
						children: [
							SITE.whatsappDisplay,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mist",
								children: "(placeholder — set in site.ts)"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-medium text-ink",
						children: "Service area"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: "Sentosa Island, Singapore"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-5 py-6 text-xs leading-relaxed text-mist sm:px-8",
				children: [
					SITE.name,
					" delivers and collects on Sentosa Island only. Customers are responsible for setup, pack-down, adult supervision, and a nearby power point. Bookings are confirmed after we review your enquiry. CE / KC certified equipment. Refundable damage deposit required.",
					isWhatsAppReady() ? "" : " WhatsApp number not yet connected."
				]
			})
		})]
	});
}
function JsonLd() {
	const data = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: SITE.name,
		description: SITE.seoDescription,
		areaServed: {
			"@type": "Place",
			name: "Sentosa Island, Singapore"
		},
		priceRange: `S$${SITE.priceSgd}`,
		currenciesAccepted: "SGD",
		telephone: isPlaceholder(SITE.whatsappDisplay) ? void 0 : SITE.whatsappDisplay,
		image: "/images/hero.jpg"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
function isPlaceholder(value) {
	return value.includes("XXXX");
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Specs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rules, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Booking, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDock, {})
	] });
}
//#endregion
export { Home as component };
