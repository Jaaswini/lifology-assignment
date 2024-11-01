import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  flex: {
    display: "flex",
  },
  row: {
    flexDirection: "row",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  userCardContainer: {
    backgroundColor: "#fff",
    padding: 15,
    gap: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  textContainer: {},
  smText: {
    fontSize: 12,
  },
  mdText: {
    fontSize: 14,
  },
  lgText: {
    fontSize: 16,
  },
  xlText: {
    fontSize: 18,
  },
  xxlText: {
    fontSize: 20,
  },
  normal: {
    fontWeight: "400",
  },
  semiBold: {
    fontWeight: "600",
  },
  bold: {
    fontWeight: "900",
  },
  grayText: {
    color: "#758694",
  },
  gap10: {
    gap: 10,
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  tag: {
    padding: 5,
    backgroundColor: "#D0B8A8",
    borderRadius: 10,
  },
  gap20: {
    gap: 20,
  },
  gap5: {
    gap: 1,
  },
  fullHeight: {
    height: "100%",
  },
})
