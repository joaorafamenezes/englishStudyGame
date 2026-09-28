export const MASTERED_STORAGE_KEY = "gap_runner_mastered";
export const MASTERED_CHANGED_EVENT = "gap_runner_mastered_changed";

/**
 * Lê os IDs dos conectivos marcados como dominados do localStorage.
 */
export function getMasteredIds(): Set<string> {
  try {
    const saved = localStorage.getItem(MASTERED_STORAGE_KEY);
    return saved ? new Set<string>(JSON.parse(saved)) : new Set<string>();
  } catch {
    return new Set<string>();
  }
}

/**
 * Salva o conjunto de IDs dominados e notifica a aplicação via CustomEvent.
 */
export function saveMasteredIds(ids: Set<string>): void {
  try {
    localStorage.setItem(MASTERED_STORAGE_KEY, JSON.stringify(Array.from(ids)));
  } catch (err) {
    console.error("Falha ao salvar itens dominados no localStorage:", err);
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(MASTERED_CHANGED_EVENT, {
        detail: { masteredIds: Array.from(ids) },
      }),
    );
  }
}

/**
 * Alterna o status de domínio de um único conectivo.
 */
export function toggleMasteredId(id: string): { next: Set<string>; isNowMastered: boolean } {
  const current = getMasteredIds();
  const next = new Set(current);
  let isNowMastered = false;

  if (next.has(id)) {
    next.delete(id);
    isNowMastered = false;
  } else {
    next.add(id);
    isNowMastered = true;
  }

  saveMasteredIds(next);
  return { next, isNowMastered };
}

/**
 * Marca ou desmarca todos os conectivos de uma lista (ex: toda uma área/categoria).
 */
export function setAreaMastered(connectorIds: string[], mastered: boolean): Set<string> {
  const current = getMasteredIds();
  const next = new Set(current);

  if (mastered) {
    connectorIds.forEach((id) => next.add(id));
  } else {
    connectorIds.forEach((id) => next.delete(id));
  }

  saveMasteredIds(next);
  return next;
}

/**
 * Verifica se todos os conectivos de uma área estão dominados.
 */
export function isAreaFullyMastered(connectorIds: string[], masteredIds: Set<string>): boolean {
  if (connectorIds.length === 0) return false;
  return connectorIds.every((id) => masteredIds.has(id));
}
