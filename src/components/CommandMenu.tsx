import { Code2, Download, FolderKanban, House, Layers, Link2, Mail, UserRound } from 'lucide-react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { toast } from '@/components/ui/toast'
import { commandMenuContent, contactContent, navItems, siteMeta, socialLinks } from '@/data/portfolioData'
import { copyToClipboard } from '@/lib/clipboard'

const navIcons = [House, FolderKanban, Layers, UserRound]

interface CommandMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  function runCommand(action: () => void) {
    onOpenChange(false)
    action()
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title={commandMenuContent.title}
      description={commandMenuContent.description}
    >
      <Command>
        <CommandInput placeholder={commandMenuContent.placeholder} />
        <CommandList>
          <CommandEmpty>{commandMenuContent.emptyLabel}</CommandEmpty>

          <CommandGroup heading={commandMenuContent.navigateGroupLabel}>
            {navItems.map((item, index) => {
              const Icon = navIcons[index]
              return (
                <CommandItem
                  key={item.href}
                  onSelect={() => runCommand(() => {
                    window.location.href = `/${item.href}`
                  })}
                >
                  {Icon && <Icon />}
                  {item.label}
                </CommandItem>
              )
            })}
          </CommandGroup>

          <CommandGroup heading={commandMenuContent.actionsGroupLabel}>
            <CommandItem
              onSelect={() => runCommand(() => {
                window.open(siteMeta.cvUrl, '_blank', 'noreferrer')
              })}
            >
              <Download />
              {commandMenuContent.viewResumeLabel}
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(async () => {
                const succeeded = await copyToClipboard(contactContent.email)
                toast.add(
                  succeeded
                    ? {
                        title: contactContent.copiedTitle,
                        description: contactContent.copiedDescription,
                        type: 'success',
                      }
                    : {
                        title: contactContent.copyErrorTitle,
                        description: contactContent.copyErrorDescription,
                        type: 'error',
                      }
                )
              })}
            >
              <Mail />
              {commandMenuContent.copyEmailLabel}
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => {
                window.open(socialLinks.github.href, '_blank', 'noreferrer')
              })}
            >
              <Code2 />
              {commandMenuContent.openGithubLabel}
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => {
                window.open(socialLinks.linkedin.href, '_blank', 'noreferrer')
              })}
            >
              <Link2 />
              {commandMenuContent.openLinkedinLabel}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}

export default CommandMenu
