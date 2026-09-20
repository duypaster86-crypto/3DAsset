# GPT Web Review - unified skill (Antigravity IDE)

Da gom 3 skill cu (`github-flow`, `gpt-web-review`, `pr-fix`) thanh **1 thu muc
skill tu chua duy nhat**: `gpt-web-review/`. Khong con goi cheo `/github-flow`
hay `/pr-fix`; tat ca nam trong `references/`.

## Vong lap

A (implementer trong Antigravity) code -> commit/push -> tao PR -> B (ChatGPT Web
qua Chrome DevTools MCP) review -> ghi review len PR -> A sua loi hop le -> push ->
review lai -> ... -> B duyet -> (tuy chon) merge -> (tuy chon) xoa branch.

- **Agent A** = ban, chay trong Antigravity IDE (code + git + merge).
- **Agent B** = ChatGPT Web (reviewer nghiem ngat, khong viet code). Mac dinh
  `GPT-5.6 Sol High`, effort high (doi duoc).

## Cau truc thu muc (1 folder)

```text
gpt-web-review/
  SKILL.md                     # skill dieu phoi (entry: /gpt-web-review)
  README.md                    # file nay
  references/
    github-flow.md             # git/branch/PR/merge/xoa branch
    review-prompt.md           # prompt gui cho Agent B
    pr-fix.md                  # quy tac sua loi + quality gate
```

## Cai dat

Copy nguyen thu muc `gpt-web-review/` vao thu muc skills cua Antigravity, roi goi:

```text
/gpt-web-review
```

## Cach goi + option merge

Dung `key=value` hoac cau tu nhien:

```text
target_branch      = <branch>            # mac dinh: default branch cua repo (tu phat hien)
reviewer_model     = GPT-5.6 Sol High    # doi model duoc
reviewer_effort    = high
handoff            = browser | manual    # browser = Chrome DevTools MCP; manual = ban dan tay
merge_mode         = auto | ready_only   # mac dinh ready_only
delete_branch      = true | false        # mac dinh theo merge_mode: auto => xoa, ready_only => n/a
max_review_rounds  = 8
max_same_blocker   = 3
review_wait_seconds = 45
```

### Hai hanh vi merge

- **`merge_mode=ready_only` (mac dinh):** qua het gate thi CHI bao `READY_TO_MERGE`,
  **khong merge**. Ban tu merge va tu xoa branch.
- **`merge_mode=auto`:** qua het gate thi **tu merge** vao `target_branch` va
  **MAC DINH xoa branch nguon** sau merge. Muon giu branch: `delete_branch=false`.

### Vi du lenh

```text
# Chi thong bao, ban tu merge/xoa branch:
/gpt-web-review target_branch=main merge_mode=ready_only handoff=browser

# Tu merge khi B duyet + tu xoa branch (mac dinh):
/gpt-web-review target_branch=main merge_mode=auto handoff=browser

# Tu merge nhung GIU branch:
/gpt-web-review target_branch=main merge_mode=auto delete_branch=false handoff=browser

# Cau tu nhien cung duoc:
"Dung /gpt-web-review review PR hien tai, target_branch=main, khi B duyet thi
 tu merge squash va xoa branch, handoff=browser."
```

Lenh merge/xoa branch (github-flow dung ben trong):
```bash
gh pr merge <PR_NUMBER> --squash --delete-branch   # merge + xoa branch
gh pr merge <PR_NUMBER> --squash                    # merge, giu branch
```

## Yeu cau moi truong

- GitHub tooling: push branch, tao/doc/comment PR, doc CI; can quyen merge khi
  `merge_mode=auto`, quyen xoa branch khi se xoa.
- `handoff=browser`: Chrome DevTools MCP + phien dang nhap `https://chatgpt.com`.
- Agent B truy cap duoc PR that (GitHub connector cua ChatGPT, hoac PR public).
  Khong bao gio dan source private vao ChatGPT.

## Antigravity (agy) - bot hoi + cho phep MCP/PR

### Tat hoi khi sua file (khong dung toi MCP)
- Nhan Shift+Tab de vao che do accept-edits, hoac chay: `agy --mode=accept-edits`
- accept-edits CHI tu duyet sua file (write_to_file / replace_file_content), KHONG dung
  toi MCP hay terminal -> khong anh huong chrome-devtools MCP.
- Giu qua cac phien: dat `agentMode` trong `~/.gemini/antigravity-cli/settings.json`
  (Windows: `%USERPROFILE%/.gemini/antigravity-cli/settings.json`) hoac go `/config`.

### Cho phep goi ChatGPT Web (MCP) + comment/merge PR khoi hoi
Dung `/permissions` (hoac Settings > Agent) them vao danh sach Allow:
- `mcp(chrome-devtools/*)`   # tu duyet moi tool chrome-devtools (goi ChatGPT Web)
- `command(gh)`             # tu chay gh: comment / tao / merge PR
- `command(git)`            # tu commit / push

Uu tien: Deny > Ask > Allow. Dung de `mcp(*)` hoac `command(*)` trong Ask, neu khong
rule allow cu the se bi ghi de va van hoi. Doi permission chi ap dung cho message MOI.
(Co bug allow-list thi thoang van hoi -> cap nhat agy ban moi, dat lai qua /permissions.)

### Chrome chay nen / khong hien giao dien khi chay agy trong terminal Antigravity
Trieu chung: agy bao mo Chrome thanh cong, vao duoc chatgpt.com, nhung khong thay cua so.
Nguyen nhan hay gap: mot instance Chrome nen (headless) cu van giu userDataDir; lan mo sau
bam vao instance do (mot userDataDir chi 1 Chrome dung duoc) -> "thanh cong" nhung khong GUI.

Cach on dinh nhat (giai quyet ca profile lan headful): tu mo Chrome headful truoc, roi
cho MCP gan vao qua debug port:
  1. Dong het chrome.exe cu (Task Manager).
  2. Mo Chrome debug (PowerShell):
     & "C:/Program Files/Google/Chrome/Application/chrome.exe" --remote-debugging-port=9222 --user-data-dir="$env:USERPROFILE/.cache/chrome-devtools-mcp/xyz" "https://chatgpt.com/"
  3. Cau hinh MCP dung: `--browser-url=http://127.0.0.1:9222` (da dung browser-url thi bo --userDataDir).
  4. Kiem tra cong debug: `curl.exe http://127.0.0.1:9222/json/version`

Cach nay chay giong nhau du agy o terminal Windows hay terminal Antigravity, vi Chrome do
BAN mo (headful), khong phu thuoc ngu canh tien trinh con cua IDE.

## Da thay doi so voi ban 3-skill

1. Gom 3 skill -> 1 skill tu chua (`references/` thay cho goi cheo slash).
2. Them `merge_mode` (auto / ready_only) + `delete_branch` (auto => xoa branch).
3. Buoc merge tach ro 2 nhanh (chi bao vs tu merge) + lenh `gh` cu the.
4. Chuan hoa merge authorization theo dung PR + target branch + HEAD_SHA da duyet.
5. Tach prompt reviewer ra `references/review-prompt.md`, yeu cau B tu bao SHA quan sat.
6. Coi diff/PR/comment la du lieu khong tin cay (chong prompt-injection); khong lo secret.

## Neu ban muon 2 thu muc thay vi 1

Tach `references/github-flow.md` thanh 1 skill dung chung `/github-flow` (huu ich
cho git thong thuong), giu `gpt-web-review/` la orchestrator (van chua pr-fix +
review-prompt). Bao mình neu ban muon ban 2-folder nay.
