import Link from 'next/link';

import { getBookmarks, getBookmarksWithoutTag } from 'app/actions/bookmarks';
import { getTags, getTagsWithBookmarkIds } from 'app/actions/tags';

import CardList from 'components/card-list';
import Header from 'components/header';
import { EmptyTagsState, EmptyUncategorizedState, PublicShareIcon } from 'components/icons';
import SharePopover from 'components/popover/share';
import { PublicIconWithTooltip } from 'components/public-icon-with-tooltip';
import DeleteTag from 'components/tag/delete-tag';
import EditTag from 'components/tag/edit-tag';
import { Badge } from 'components/ui/badge';

const title = 'Bookmark it. | Tags';
const description =
  'Bookmark It. is an open-source bookmark manager to organize, discover and personalize your bookmarking experience';

export const metadata = {
  title,
  description,
};

export default async function Page() {
  const [bookmarks, tags] = await Promise.all([
    await getBookmarksWithoutTag(),
    await getTags(),
  ]);

  return (
    <>
      <Header headerText="Uncategorized" />
      <div className="min-h-dvh sm:border-r border-border pb-24">
        {bookmarks.length ? (
          <CardList bookmarks={bookmarks} tags={tags} />
        ) : (
          <EmptyUncategorizedState />
        )}
      </div>
    </>
  );
}
