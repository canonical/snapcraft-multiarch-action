function preferredChannel(base_channele: string, channel: string): string {
  if (['stable', 'candidate', 'beta', 'edge'].includes(channel)) {
    return `${base_channele}/${channel}`
  }
  return channel
}

export function getChannel(base: string, channel: string): string {
  switch (base) {
    case 'core24':
      return preferredChannel('9.x', channel)
    case 'core22':
      return preferredChannel('9.x', channel)
    case 'core20':
      return preferredChannel('8.x', channel)
    case 'core18':
      return preferredChannel('5.x', channel)
    case 'core':
      return preferredChannel('4.x', channel)
  }
  return channel
}
