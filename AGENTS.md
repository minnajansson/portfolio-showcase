<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep portfolio content in a shared browser-safe data module so project lists and detail pages stay consistent.
- Use the homepage as the only project listing, separate routes for about and case studies, and redirects for legacy work/contact URLs so shared links keep working.
- Store optional project references alongside project data and render them in the facts list so references remain project-specific.
- Keep gallery ordering in the shared portfolio data; distribute alternating entries into independent desktop columns and restore sequential mobile order to avoid masonry gaps.
