module Types
  class ThemesType < Types::BaseEnum
    value "DEFAULT", "base theme, used when none stored for user", { value: nil }
    value "DARK", "a basic dark theme with white type"
    value "EARTH", "rich and heavy brown theme"
    value "TEST", "text only theme for testing layout"
  end
end
