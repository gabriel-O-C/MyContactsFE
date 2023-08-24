import EventManager from '../libs/EventManager';

export const toastManager = new EventManager();
/**
 *
 * @param {{type: import('../components/Toast/ToastMessage'.ToastTypes); text: string}} param0
 */
export default function toast({ type, text, duration }) {
  toastManager.emit('addtoast', { type, text, duration });
}
