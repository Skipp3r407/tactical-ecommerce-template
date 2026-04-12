import { SITE_NAME_SHORT } from "@/config/brand";

/**
 * Demo chat knowledge: 1,000 synthetic Q&A pairs for firearms retail / range context.
 * Not legal advice — answers are generic; customers must verify laws and store policy with staff.
 */

export type ChatQAPair = { q: string; a: string; triggers: string[] };

const PREFIXES = [
  "How do I",
  "How can I",
  "What is",
  "What are",
  "Where do I",
  "When should I",
  "Can I",
  "Do you",
  "Does the store",
  "Is it possible to",
  "Will I need to",
  "Are you able to",
  "Who should I contact about",
  "What paperwork is required for",
  "How long does it usually take to",
  "Why would someone need to",
  "Should I consider",
  "Can my local FFL help with",
  "What happens if",
  "Is there a fee for",
] as const;

/** 50 retail / 2A-adjacent topics — paired with PREFIXES → 1,000 unique questions */
const TOPICS = [
  "an FFL transfer",
  "a NICS background check",
  "handgun purchase requirements",
  "buying a rifle out of state",
  "ammunition shipping restrictions",
  "high-capacity magazine rules",
  "NFA trust paperwork",
  "suppressor transfer timelines",
  "SBR tax stamp process",
  "pistol brace regulations",
  "zeroing a red dot optic",
  "proper scope ring torque",
  "two-point sling adjustment",
  "gun cleaning best practices",
  "safe firearm storage at home",
  "range eye protection standards",
  "hearing protection for shooting",
  "hollow-point ammo for defense",
  "bulk 9mm training ammo",
  "returns on firearms and accessories",
  "trade-in value on used guns",
  "special orders from a distributor",
  "back-in-stock notifications",
  "price matching policies",
  "military or veteran discounts",
  "layaway for firearms",
  "payment methods at checkout",
  "ID requirements for ammo sales",
  "straw purchase warnings",
  "private party transfers",
  "ATF Form 4473 questions",
  "ATF compliance for dealers",
  "interstate firearm shipping",
  "featureless rifle configurations",
  "state-specific restrictions",
  "magazine disconnect devices",
  "locked container transport",
  "concealed carry basics",
  "hunting rifle season prep",
  "shotgun for home defense",
  "home defense ammunition choice",
  "co-witnessing iron sights with a dot",
  "choosing a weapon-mounted light",
  "holster retention levels",
  "bipod versus sling for precision",
  "muzzle device pinning",
  "thread protector versus muzzle brake",
  "buying optics online",
  "checking bore alignment",
  "range safety etiquette",
] as const;

const DISCLAIMER =
  "General info only — not legal advice. Confirm laws and store policy with staff.";

function answerForTopic(topic: string, variant: number): string {
  const v = variant % 4;
  const rotate = (a: string, b: string, c: string, d: string) => [a, b, c, d][v]!;

  if (/FFL|transfer|4473|private party|interstate|out of state/i.test(topic)) {
    return rotate(
      `Transfers usually go through a licensed FFL; you'll complete paperwork and a background check where required. ${DISCLAIMER} ${SITE_NAME_SHORT} can outline the steps on Contact.`,
      `Your receiving dealer coordinates shipping and transfer fees. Bring valid ID and any required permits for your jurisdiction. ${DISCLAIMER}`,
      `Out-of-state purchases typically ship to a local FFL — verify their receiving policy first. ${DISCLAIMER}`,
      `Form 4473 and ID checks are standard for retail transfers. Ask us for a checklist before pickup. ${DISCLAIMER}`,
    );
  }
  if (/NICS|background check/i.test(topic)) {
    return rotate(
      `NICS checks are used where applicable; outcomes depend on federal/state rules and your record. ${DISCLAIMER}`,
      `Delays or denials are handled per law — the shop can explain timelines and next steps on Contact.`,
      `Bring current, government-issued ID; additional documents may apply by state. ${DISCLAIMER}`,
      `Background checks help ensure compliant sales — we follow the process your jurisdiction requires.`,
    );
  }
  if (/handgun purchase|rifle|age|requirements/i.test(topic)) {
    return rotate(
      `Age and eligibility rules vary by state and product type. ${DISCLAIMER} We verify at sale.`,
      `Bring ID and any state-issued credentials (permits, FOID, etc.) your area requires.`,
      `Staff can confirm what’s needed for your specific SKU and residence before you order.`,
      `Federal and local rules both apply — ask Contact with your ZIP for a precise list.`,
    );
  }
  if (/ammunition|ammo|9mm|hollow|bulk|shipping/i.test(topic)) {
    return rotate(
      `Ammo shipping and pickup rules depend on product and destination. ${DISCLAIMER} We may require ID and refuse restricted areas.`,
      `Hollow-point vs training loads: match caliber, firearm manual, and local law. Staff can suggest common pairings.`,
      `Bulk packs are popular for training — check range rules on steel ammo and bi-metal jackets.`,
      `Order holds may apply during high demand; specials are listed under Shop and Specials.`,
    );
  }
  if (/magazine|capacity|featureless|restrictions|California|NY|NJ/i.test(topic)) {
    return rotate(
      `Magazine and feature rules change by state — we configure listings to reduce mistakes, but ${DISCLAIMER.toLowerCase()}`,
      `“Compliant” builds depend on current statutes — verify with counsel or official guidance for your state.`,
      `We may block or modify orders that can’t ship lawfully to your address.`,
      `Contact us with your state before assuming a catalog SKU is legal for you.`,
    );
  }
  if (/NFA|suppressor|SBR|stamp|trust|brace/i.test(topic)) {
    return rotate(
      `NFA items involve ATF forms, wait times, and tax stamps. ${DISCLAIMER} Use a dealer experienced in NFA transfers.`,
      `Braces and SBR rules have changed over time — confirm current ATF guidance before configuring a build.`,
      `Suppressor transfers often take months; plan ahead and keep communication with your FFL.`,
      `Trusts and responsible persons add steps — ask an NFA-knowledgeable FFL for your situation.`,
    );
  }
  if (/red dot|scope|optic|co-witness|torque|rings|zero/i.test(topic)) {
    return rotate(
      `Mount optics per manufacturer torque specs; use a torque driver and thread treatment if recommended.`,
      `Zero at the distance you train most — start close, confirm, then validate at longer ranges when safe.`,
      `Co-witness height depends on mount and iron sights — match riser/optic plate to your setup.`,
      `Browse optics categories on Shop; bundle mounts when your slide or rail pattern matches.`,
    );
  }
  if (/sling|bipod|holster|light|muzzle|thread/i.test(topic)) {
    return rotate(
      `Slings add stability; two-point is common on carbines — adjust length for transitions you practice.`,
      `Holster retention should balance security with draw — try gear in training, not first at the range.`,
      `Weapon lights need compatible holsters and activation training — verify lumens vs indoor use.`,
      `Muzzle devices affect recoil and signature — pinned/welded builds may be required for legal length.`,
    );
  }
  if (/cleaning|bore|storage|safe/i.test(topic)) {
    return rotate(
      `Clean per caliber and manufacturer guidance; protect bores and use ventilation for solvents.`,
      `Unload, verify clear, and segregate ammo before maintenance — follow the four safety rules.`,
      `Store firearms locked, separate from ammo where minors are present — local rules may require specific devices.`,
      `We stock cleaning kits and safes in accessories — see Shop or Request a product for odd sizes.`,
    );
  }
  if (/range|eye|ear|etiquette|safety/i.test(topic)) {
    return rotate(
      `Wear ANSI-rated eye pro and appropriate hearing protection — electronic muffs help instruction on the line.`,
      `Follow cold-range commands; keep muzzles downrange and fingers off triggers until on target.`,
      `Cease-fire means stop shooting, clear, and step back — listen to ROs at all times.`,
      `New shooters benefit from intro classes — ask Contact about training partners near you.`,
    );
  }
  if (/concealed carry|transport|locked container/i.test(topic)) {
    return rotate(
      `Carry and transport laws are state-specific. ${DISCLAIMER} Take a reputable class for your state.`,
      `Locked cases and unloaded transport are common requirements — verify statutes before travel.`,
      `Reciprocity maps change — don’t assume your permit works everywhere.`,
      `We sell holsters and bags suited to common carry methods; fit is personal — try before you rely on it.`,
    );
  }
  if (/hunting|shotgun|season|defense/i.test(topic)) {
    return rotate(
      `Match gauge, choke, and ammo to intended use — hunting regs list lawful methods and seasons.`,
      `Home defense loads should pattern reliably in your firearm — pattern on paper at home-defense distances.`,
      `Shotguns and rifles serve different roles — train with what you’ll actually use under stress.`,
      `Check local hunting laws for magazine limits and transport in vehicles.`,
    );
  }
  if (/return|trade|special order|stock|layaway|discount|price|payment|fee|notify/i.test(topic)) {
    return rotate(
      `Policies vary by item (firearms vs accessories). Read legal pages and ask Contact for the latest store rules.`,
      `Special orders depend on distributor availability — we’ll quote lead times when possible.`,
      `Discounts and promos post on Specials; ID-based discounts may need verification at pickup.`,
      `Payment options and fees are confirmed at checkout — ask before placing high-value orders.`,
    );
  }
  if (/straw|ID for ammo|ATF|compliance/i.test(topic)) {
    return rotate(
      `Straw purchases are illegal — buy only for yourself unless lawfully exempt. ${DISCLAIMER}`,
      `Dealers maintain compliance programs — cooperate with holds and additional verification when asked.`,
      `Ammo ID rules vary — we follow state and federal requirements at the counter and for shipment.`,
      `If something feels off, staff stop the sale — it protects everyone.`,
    );
  }

  return rotate(
    `We cover that topic in our FAQ and on Contact — ${SITE_NAME_SHORT} staff can tailor guidance to your order.`,
    `Browse Shop for SKUs, or message Contact with your state and product interest. ${DISCLAIMER}`,
    `Training, gear choice, and law overlap — we’ll point you to resources and in-stock alternatives.`,
    `Thanks for asking — a teammate can confirm details that depend on your ZIP and SKU.`,
  );
}

function buildTriggers(topic: string, prefix: string): string[] {
  const words = topic
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
  const extra = prefix
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 2);
  return Array.from(new Set([...words, ...extra]));
}

export function buildChatKnowledgePairs(): ChatQAPair[] {
  const rows: ChatQAPair[] = [];
  let variant = 0;
  for (const topic of TOPICS) {
    for (const prefix of PREFIXES) {
      const q = `${prefix} ${topic}?`;
      const a = answerForTopic(topic, variant);
      rows.push({ q, a, triggers: buildTriggers(topic, prefix) });
      variant += 1;
    }
  }
  return rows;
}

/** Exactly 1,000 question/answer rows (50 topics × 20 prefixes). */
export const CHAT_KNOWLEDGE_COUNT = 1000 as const;

export const CHAT_KNOWLEDGE_PAIRS: readonly ChatQAPair[] = buildChatKnowledgePairs();

if (CHAT_KNOWLEDGE_PAIRS.length !== CHAT_KNOWLEDGE_COUNT) {
  throw new Error(`Expected ${CHAT_KNOWLEDGE_COUNT} chat pairs, got ${CHAT_KNOWLEDGE_PAIRS.length}`);
}

/** Returned when no knowledge pair scores high enough — chat UI may layer heuristics on top */
export const CHAT_NO_MATCH_REPLY = `I'm not sure from that wording — try Shop, FAQ, or Contact. (${SITE_NAME_SHORT} assistant)`;

/**
 * Score user text against trigger keywords; returns best-matching canned answer.
 */
export function getChatbotReply(userText: string): string {
  const raw = userText.toLowerCase().trim();
  if (raw.length < 2) return CHAT_NO_MATCH_REPLY;

  const norm = raw.replace(/[^\w\s]/g, " ");
  const tokens = norm.split(/\s+/).filter((w) => w.length > 2);

  let bestScore = 0;
  let bestAnswer = CHAT_NO_MATCH_REPLY;

  for (const row of CHAT_KNOWLEDGE_PAIRS) {
    let score = 0;
    for (const kw of row.triggers) {
      if (kw.length < 3) continue;
      if (norm.includes(kw)) score += 4;
    }
    for (const t of tokens) {
      for (const kw of row.triggers) {
        if (t === kw) score += 3;
        else if (kw.includes(t) || t.includes(kw)) score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = row.a;
    }
  }

  if (bestScore < 2) return CHAT_NO_MATCH_REPLY;
  return bestAnswer;
}
