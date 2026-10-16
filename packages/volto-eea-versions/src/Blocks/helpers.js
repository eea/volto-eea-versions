import { formatDate } from '@plone/volto/helpers/Utils/Date';

export const formattedDate = (
  date,
  formatOptions,
  prefix = ' - ',
  locale = 'en-gb',
) => {
  if (!date || date === 'None') {
    return '';
  }
  const format = formatOptions || {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  return `${prefix} ${formatDate({
    date,
    format,
    locale,
  })}`;
};
